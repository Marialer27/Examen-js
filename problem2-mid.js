function daysFromTheThird() {
    //Fecha actual
    const currentDate= new Date();
    //Año actual
    let currentYear = currentDate.getFullYear();
      if (currentYear >= 2023) {
    //Si no es año bisiesto ingresa en este bucle
        if (
          !(currentYear % 4 == 0 && currentYear % 100 != 0) ||
          currentYear % 400 == 0
        ) {
        //Calculamos la cantidad de años desde el 2023
          year = currentDate.getFullYear() - 2023;
        // Si esta en enero, le sumo los 13 dias que quedaron del 2022
        //Si esta en enero, la funcion getMonth() devuelve 0
          if (currentDate.getMonth() == 0)
            rest2023 = year * 365 + 13 + currentDate.getDate();
      //En febrero sumo los 28 días porque no es bisiesto
          else if (currentDate.getMonth() == 1)
            rest2023 = year * 365 + 44 + currentDate.getDate();
          else if (currentDate.getMonth() == 2)
            rest2023 = year * 365 + 72 + currentDate.getDate();
          else if (currentDate.getMonth() == 3)
            rest2023 = year * 365 + 103 + currentDate.getDate();
          else if (currentDate.getMonth() == 4)
            rest2023 = year * 365 + 133 + currentDate.getDate();
          else if (currentDate.getMonth() == 5)
            rest2023 = year * 365 + 164 + currentDate.getDate();
          else if (currentDate.getMonth() == 6)
            rest2023 = year * 365 + 194 + currentDate.getDate();
          else if (currentDate.getMonth() == 7)
            rest2023 = year * 365 + 245 + currentDate.getDate();
          else if (currentDate.getMonth() == 8)
            rest2023 = year * 365 + 256 + currentDate.getDate();
          else if (currentDate.getMonth() == 9)
            rest2023 = 286 + currentDate.getDate();
          else if (currentDate.getMonth() == 10)
            rest2023 = 317 + currentDate.getDate();
          else if (currentDate.getMonth() == 11)
            rest2023 = 347 + currentDate.getDate();
        }
        return `Pasaron ${rest2023} días desde el Domingo, 18 de diciembre de 2022`;
      }
      return `Pasaron ${rest2023 + 1} días desde el Domingo, 18 de diciembre de 2022`;
    }
    
    
    
    
    
    
    
