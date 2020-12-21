printRandomNumber()
  .then(() => printAllCities());  async function printRandomNumber() 
  {    
       const randNumber = await getRandomNumber();const 
       randNumberLog = RandomNumber ('randNumber');   
       console.log(randNumberLog); 
         htmlLog(randNumberLog);
          }  async function printAllCities() {   
              for (const city of [ 'dallas', 'houston', 'atlanta' ]) {   
                    await printLatitudeAndLongitude(city);   
                    } 
                    } 

                     function getRandomNumber() {     
                         return new Promise(x =>      
                          setTimeout(() => x(Math.floor(Math.random() * 1000)), 500)); }  
                          async function printLatitudeAndLongitude(city) {     
                              const url = https//geocode.xyz/${city}?json=1;     
                               let res = await fetch(url);    
                                 if (res.status != 200) 
                                 {  

                                      res = await new Promise(x => setTimeout(async () => {     
                                              const tmpRes = await fetch(url);         x(tmpRes);   
                                                  }, 1000));   }      const json = await res.json();  
                                              const output = $json.standard.city - Latitude (json.latt),
                                              'Longitude' (json.longt); 
                                         console.log(output);  

                                          htmlLog(output); }  "(function)" 

