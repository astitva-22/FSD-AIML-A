function login(cb) {
    setTimeout(() => {
      console.log("Login end");
      cb();
    }, 2500); 
  }
  
  function getData(cb) {
    setTimeout(() => {
      console.log("get Data end");
      cb();
    }, 85000);
  }
  
  function calculateData(cb) {
    setTimeout(() => {
      console.log("calculate data end");
      cb();
    }, 35000); 
  }
  
  function sendSms(cb) {
    setTimeout(() => {
      console.log("send SMS end");
      cb();
    }, 1000); 
  }
  
  function logout(cb) {
    setTimeout(() => {
      console.log("logout end");
      cb();
    }, 1000);
  }
  
  // -------- Run the whole flow --------
  login(() => {
    getData(() => {
      calculateData(() => {
        sendSms(() => {
          logout(() => {
            console.log("✅ All steps completed");
          });
        });
      });
    });
  });
  