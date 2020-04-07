
class SubPromise extends Promise {
  then(lasuite) {
    const wrappedSuite = () => {
      console.log('on then la promesse')
      lasuite()
    }
    return super.then(wrappedSuite)
  }


  catch(handleErr) {
    const wrappedHandleErr = () => {
      console.log('on handle l\'er de la promesse')
      handleErr.apply()
    }
    return super.then(wrappedHandleErr)
  }
}


const aPromise = () => new SubPromise((resolve, reject) => {
  if (Math.random() > 0.5) resolve()
  else reject(Error('ee'))
})

aPromise()
  .then(() => {
    console.log('on sort de la promesse')
  })
  .catch((er) => {
    console.log(`il y a une erreur... ${er}`)
  })
