const getInstall = () => {
     const storedInstallSTR = localStorage.getItem("installed")
     if(storedInstallSTR){
        const storedInstallData = JSON.parse(storedInstallSTR)
        return storedInstallData
     }
     else{
        return []
     }
}

const addInstallBD = (id) => {
      const storedInstallData = getInstall()
      if(storedInstallData.includes(id)){
        alert('this app is already installed')
       }
      else{
        storedInstallData.push(id)
        const data = JSON.stringify(storedInstallData)
        localStorage.setItem("installed", data)
        }
}

export {addInstallBD, getInstall}
