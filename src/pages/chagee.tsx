import { Alert, QRCode, Segmented, message, Button, Empty, Image } from "antd";
import dayjs from 'dayjs'
import { useCallback, useRef, useState } from "react";
import HighText from "../components/HighText";
import showImage from "../utils/downloadHtmlAsImage/showImage";
import SecureWatermark from "../components/SecureWatermark";

export default function Heytea() {
  const ref = useRef<HTMLDivElement>(null)
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const [imageSrc, setImageSrc] = useState<{time: string, data: string}[]>([]);
  const [highLight , setHighLight] = useState<boolean>(true)
  const [status , setStatus] = useState<number>(0)
  const [isLoading , setIsLoading] = useState<boolean>(false)
  
  const out = useCallback(() => {
    if (ref.current === null) {
      return
    }
    setIsLoading(true)

    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });

    try {
      showImage(ref.current,"PNG", true).then((imageData)=>{
        if(imageData === 'data:,') {
          messageApi.open({
            key,
            type: 'error',
            content: '生成失败，请将控制台截图反馈给开发者',
          });
          setIsLoading(false)
        }else {
          setStatus(2)
          messageApi.open({
            key,
            type: 'success',
            content: '生成成功！',
          });
          setIsLoading(false)
        }
        setImageSrc((v)=>[{time: new Date().toLocaleString(), data: imageData}, ...v])
      })
      // showModal()
    } catch (error) {
        console.log(error)
        messageApi.open({
          key,
          type: 'error',
          content: '生成失败，请将控制台截图反馈给开发者',
        });
    }
  }, [ref, messageApi])

  
  return (
    <div mt-4>
      {contextHolder}
      <Alert message="蓝色的是输入框属性，绿色的是示例文字（点击可快速填充）。输入完毕后进入预览模式点击生成图片哦！" type="info" showIcon closable />
      {/* <Alert message="此项目疑似被“特别关注”或将出现法律风险，故临时下线电影票功能维护，将去除所有第三方信息，只保留纪念功能。感谢您的支持！" type="error" showIcon closable /> */}
      <div mt-4>
        <Segmented block={true} options={[{value: 0, label: '编辑模式'}, {value: 1, label: '预览模式'}, {value: 2, label: '导出记录'}]} value={status} onChange={(v)=>{
          setStatus(parseInt(`${v}`))
          if(v===0) {
            setHighLight(true)
          } else if(v===1) {
            setHighLight(false)
          }
        }} />
      </div>
      <div mt-4 p-2>
        <div className='flex justify-center'>
          <div bg='white' className='w-60 z-0 shadow-xl relative px-4 py-4' ref={ref} style={status===2?{display: 'none'}:{}}>
            <SecureWatermark>
              {/* <img src="/heytea.png" alt="logo" absolute w-10 h-auto right-4 top-4 op80/> */}
              <div flex='~ justify-between'>
                <div>
                  <HighText show={highLight} text='方式' eg='堂食' />
                </div>
                <div>
                  <HighText show={highLight} text='下单渠道' eg='微信小程序' />
                </div>
                <div>
                  <HighText show={highLight} text='数量' eg='1/1' />
                </div>
              </div>
              <div text='2xl'>
                <HighText show={highLight} text='产品名称' eg='伯牙绝弦' />
              </div>
              <div flex='~ gap-2' text='2xl'>
                <div>
                  <HighText show={highLight} text='杯型' eg='大杯' />
                </div>
                <div>
                  <HighText show={highLight} text='冰度' eg='标准冰' />
                </div>
                <div>
                  <HighText show={highLight} text='糖度' eg='标准糖' />
                </div>
              </div>
              <div mt-8 text='3xl'>
                <HighText show={highLight} text='取餐码' eg='T0021' />
              </div>
              <div className='mt-1'>
                <HighText show={highLight} text='日期 时间' eg={dayjs().format('MM-DD HH:mm')} />
              </div>
              <div className='mt-1'>
                <HighText show={highLight} text='店铺名称' eg='小红薯店' />
              </div>
              
              <div flex='~ justify-between' mt-4>
                <div>
                  <div font='bold'>
                    <HighText show={highLight} text='标语1' eg='原叶鲜奶茶' />
                  </div>
                  <div font='bold'>
                    <HighText show={highLight} text='标语2' eg='喝出真茶味' />
                  </div>
                  <div className='mt-2' text='0.7rem'>
                    <HighText show={highLight} text='服务热线' eg='全球服务热线400-0000-000' />
                  </div>
                </div>
                <QRCode value={'https://sticker.hsott.cn'} bordered={false} className="-m-3" size={80} color='black' />
              </div>
              <div className='mt-2' text='0.7rem'>
                <HighText show={highLight} text='承诺' eg='如果对饮料有任何不满意门店可以免费为您重做' />
              </div>
            </SecureWatermark>
          </div>
        </div>
        {status===1?
          <Button className="mt-4 w-full mt-6" type="primary" onClick={out} flex='~ items-center justify-center' size='large' loading={isLoading}>
            <div className="i-ri-camera-fill" mr-1 text='lg' style={{display: isLoading? 'none':'block'}} />
            {isLoading?'正在导出请勿切换页面':'导出图片'}
          </Button>:''
        }
        {status===2?
          <>
            {imageSrc.length === 0?
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='暂无数据' />:
              <div className='space-y-4'>
                {imageSrc.map((v,k)=>(
                  <div key={k}>
                    <div style={{border:'2px dashed #E5E7EB', padding: '10px'}}>
                      <Image
                        className="shadow-xl"
                        src={v.data}
                      />
                    </div>
                    <div text='sm gray-500' mt-2>{v.time}</div>
                  </div>
                ))
                }
              </div>
            }
          </>:
          ''
        }
        
      </div>
    </div>
  )
}
