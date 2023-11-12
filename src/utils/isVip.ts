import JSEncrypt from 'jsencrypt'

const isVip = () => {
  const decrypt = new JSEncrypt()
  const priKey  = import.meta.env.VITE_PRIKEY
  decrypt.setPrivateKey(priKey)

  const id = localStorage.getItem("key")
  const uncrypted = decrypt.decrypt(id||'')
  console.log(id);
  if(uncrypted===null){
    return {level:0}
  }
  const v = JSON.parse(uncrypted.toString())
  // setUserInfo(v)
  console.log(v);
  const t = new Date().getTime()
  if(v.time-t >= 0) {
    console.log('+ 密钥有效');
    console.log(v);
    return v
  }else{
    console.log('- 密钥无效');
    localStorage.removeItem('key')
    localStorage.removeItem('is_login')
    localStorage.removeItem('login_exp')
    return {level:0}
  }
}

export default isVip
