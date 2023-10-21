import { Collapse, List, Tag } from 'antd';
import Line from '../components/Line';

const data = [
  {
    key: '2',
    name: '呱',
    money: 6.66,
    remark: '小红书追来的，完美解决手残星人撕烂标签的问题!很期待后面高铁票的功能!太太加油!',
    reply: '谢谢支持鸭，高铁票已经更新啦！',
    time: '2023-10-19 12:47'
  },
  {
    key: '3',
    name: '*伶',
    money: 6.66,
    remark: '期待电影票和高铁票功能~',
    reply: '高铁票更新啦！电影票这周内更新哦！',
    time: '2023-10-19 14:15'
  },
  {
    key: '4',
    name: '木头',
    money: 8.88,
    remark: '小红书看到的，希望可以新增高铁票板块，真的很不错!',
    reply: '高铁票更新啦！谢谢支持',
    time: '2023-10-19 14:33'
  },
  {
    key: '5',
    name: '*我',
    money: 2.22,
    remark: '小红书刷到的，祝你做大做强',
    reply: '谢谢！祝你生活愉快~',
    time: '2023-10-19 15:45'
  },
  {
    key: '6',
    name: '语言干饭人',
    money: 8.88,
    remark: '用来逗我的朋友们玩她们都很开心！真的很有趣，谢谢',
    reply: '嘿嘿，谢谢支持',
    time: '2023-10-19 15:46'
  },
  {
    key: '7',
    name: '小高（工作版）',
    money: 6.66,
    remark: '亲爱的罗：小软件很棒哦，希望以后可以有很多类型哒，祝你做大做强，祝你闪闪发光，加油哦!',
    reply: '谢谢哦！祝你生活愉快鸭！',
    time: '2023-10-19 16:09'
  },
  {
    key: '8',
    name: 'A*a',
    money: 2.99,
    remark: '',
    reply: '感谢姐妹！',
    time: '2023-10-19 16:56'
  },
  {
    key: '9',
    name: 'iris',
    money: 5,
    remark: '感谢开发者开发这么棒的网站！对于收藏癖真的很有帮助！',
    reply: '谢谢！同收藏癖哈哈',
    time: '2023-10-19 20:31'
  },
  {
    key: '10',
    name: '*户',
    money: 2.33,
    remark: '快搞其他奶茶店的 收集癖很需要这个东西',
    reply: '好的！下周开始更新奶茶品牌哦！',
    time: '2023-10-19 23:05'
  },
  {
    key: '11',
    name: '碱性司空',
    money: 3.14,
    remark: '感觉好萌，期待更多板块~',
    reply: '谢谢夸奖嘿嘿，模板持续更新中~',
    time: '2023-10-20 00:35'
  },
  {
    key: '12',
    name: '琅弦',
    money: 3.14,
    remark: '刷到了，真的很好提升幸福感，感谢',
    reply: '感谢支持！祝你生活愉快~',
    time: '2023-10-20 00:46'
  },
  {
    key: '13',
    name: '*棠',
    money: 0.01,
    remark: '',
    reply: '感谢姐妹！',
    time: '2023-10-20 04:00'
  },
  {
    key: '14',
    name: '*、',
    money: 9.99,
    remark: '辛苦了，我请你喝茶~哈哈哈',
    reply: '感谢鸭！爱你一万年！！',
    time: '2023-10-20 10:43'
  },
  {
    key: '15',
    name: '*垚',
    money: 5.2,
    remark: '好厉害！',
    reply: '谢谢支持嘿嘿！',
    time: '2023-10-20 10:59'
  },
  {
    key: '16',
    name: '专门养猹去偷瓜',
    money: 6.66,
    remark: '小孩哥加油，期待更多的内容🏷️！！',
    reply: '好嘞，模板持续更新哦！',
    time: '2023-10-20 11:19'
  },
  {
    key: '17',
    name: 'C*c',
    money: 6.66,
    remark: '小孩哥太牛逼了😭',
    reply: '感谢支持，过奖了哈哈哈',
    time: '2023-10-21 10:52'
  },
  {
    key: '16',
    name: 'I*W',
    money: 2,
    remark: '希望有喜茶奥',
    reply: '好嘞，下周更新奶茶系列哦！',
    time: '2023-10-21 11:19'
  },
  {
    key: '17',
    name: '*人',
    money: 2.88,
    remark: '可以让我把小事儿记录下来，真的好治愈，谢谢啦❤️',
    reply: '谢谢姐妹鸭！人间烟火气，最抚凡人心❤️',
    time: '2023-10-21 14:09'
  },
  {
    key: '18',
    name: 'A*y',
    money: 0.01,
    remark: '怎么+作者微信',
    reply: '有事情可以加QQ群哦，后续会增加微信群哒！',
    time: '2023-10-21 20:46'
  },
];

export default function sponsor() {
  return (
    <div className=''>
      <div my-4>网站的维护需要一定运营成本，如果能收到您的赞助，我会爱你一万年！！！</div>
      <Collapse className='mb-4'
        items={[{ key: '1', label: '点击展开收款码', children: <div>
          <div>可以在付款备注留下昵称和留言哦!</div>
          <div>最后谢谢你! mua~</div>
          <img src="/wechat.JPG" alt="" w-full />
        </div> }]}
      />
      <Line zh='赞助列表' en='Sponsor List' logo={<div className="i-ri-file-list-2-line" mr-4 text='xl' />}></Line>
      <List
        header={<div>根据时间排序</div>}
        // footer={<div>Footer</div>}
        className='mt-4'
        bordered
        dataSource={data.reverse()}
        renderItem={(item) => (
          <List.Item extra={<div text='bold xl red-500'>￥{item.money.toFixed(2)}</div>} key={item.key}>
            <List.Item.Meta
              title={<div>
                <div text='gray-300 sm' className='font-normal'>
                  {item.time}
                </div>
                <div text='lg' flex='~ items-center'>
                  <Tag bordered={false} color="gold" className='mr-2'>
                    赞助
                  </Tag>
                  <div>{item.name}</div>
                </div>
              </div>}
              description={<>
                <div>留言：{item.remark || '无'}</div>
                <div text='blue-500'>开发者回复：{item.reply}</div>
              </>}
            />
              {/* 123 */}
            {/* <Typography.Text mark>[ITEM]</Typography.Text> {item.name} */}
          </List.Item>
        )}
      />
    </div>
  )
}
