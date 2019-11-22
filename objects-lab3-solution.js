// recipe 

const recipe = {
  name : " BASIC FRENCH OMELET " ,
  author : " IncredibleEgg " ,
  steps : [ "BEAT eggs, water, salt and pepper in small bowl until blended" , "HEAT butter in 6 to 8-inch nonstick omelet pan or skillet over medium-high heat until hot. TILT pan to coat bottom. POUR IN egg mixture. Mixture should set immediately at edges ", "GENTLY PUSH cooked portions from edges toward the center with inverted turner so that uncooked eggs can reach the hot pan surface. CONTINUE cooking, tilting pan and gently moving cooked portions as needed ", "When top surface of eggs is thickened and no visible liquid egg remains, PLACE filling on one side of the omelet. FOLD omelet in half with turner. With a quick flip of the wrist, turn pan and INVERT or SLIDE omelet onto plate. SERVE immediately "] ,
  ingredients : [{
    name : " Egg " ,
    unit : " unit " ,
    quantity :2 ,
    notes : " blended "
  },{name : " Water " ,
    unit : " tsp " ,
    quantity :"2" ,
    notes : ""
    },{
      name : " Salt " ,
    unit : " tsp " ,
    quantity :0.5 ,
    },
    {
      name : " Pepper  " ,
    unit : " Dash " ,
    quantity : 1 ,
    notes : ""
    },
     {
      name : " Butter  " ,
    unit : " tsp " ,
    quantity : 1 ,
    notes : ""
    } , 
      {
      name : " Cheese  " ,
    unit : " cup " ,
    quantity : 0.5 ,
    notes : " shredded "
    } ,
     {
      name : " Ham  " ,
    unit : " cup " ,
    quantity : 0.5 ,
    notes : " chopped  "
    }] ,
  numberOfServings : 1 ,
  printIngredients : function()
  {
    for (const i in recipe.ingredients)
      {
        console.log (this.ingredients[i].quantity + this.ingredients[i].unit + "of" + this.ingredients[i].name ) ;
      }
  }
}

recipe.printIngredients();



//RunTracker
const user = {
  name: 'Khaled',
  email:'Khaled@gmail.com',
  address:'some where',
  runs:[
    {date: '2032-03-22 04:00',
    distance: 1200,
    timeTaken:600
    }, 
    {date: '2042-06-01 04:00',
    distance: 1400,
    timeTaken:800
    },
    ],
  totalDistance: function() {
       let total =0;
  
       this.runs.forEach(function(run){
         total+= run.distance
     });
       console.log(total);
     },
    // will start with 0 and every oteration on this object. 
    longestRunDistance: function(){
      // store longest run
      let longestRun=0;
      this.runs.forEach(function(run){// see every run and see the longest destince
      if(run.distance> longestRun){
   
        longestRun= run.distance;
      }
  
      });
         console.log(longestRun);
    },
     averageSpeed: function(){
        let speedSum = 0 ;
        let averageSpeedAll = 0;
        this.runs.forEach(function(run){
           speed = run.distance / run.timeTaken // calculate speed for every run 
           speedSum += speed ; 
     });
      console.log ( speedSum / (this.runs.length)); 
     }
  
  };
  
  user.longestRunDistance();
  user.totalDistance();
  user.averageSpeed();
  
  
  