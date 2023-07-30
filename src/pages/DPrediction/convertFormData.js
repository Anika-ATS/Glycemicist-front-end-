

const convertFormData = data => {
  // first form
  let HighBP = parseInt(data.HighBP);
  let HighChol = parseInt(data.HighChol);
  let fruit = parseInt(data.fruit);
  let Veggies = parseInt(data.Veggies);
  let PhyActivity = parseInt(data.PhyActivity);
  let GenHlth = parseInt(data.GenHlth);
  let HeartDiseaseorAttack = parseInt(data.HeartDiseaseorAttack);
  let Sex = parseInt(data.Sex);
  let Age = parseInt(data.Age);
  let Education = parseInt(data.Education);
  let Income = parseInt(data.Income);


  // Convert BMI, MentHlth, and PhysHlth to floats
  let BMI = parseFloat(data.BMI);
  let MentHlth = parseFloat(data.MentHlth);
  let PhysHlth = parseFloat(data.PhysHlth);
  const formDataObject = {
    HighBP: HighBP,
    HighChol: HighChol,
    BMI: BMI,
    HeartDiseaseorAttack: HeartDiseaseorAttack,
    PhysActivity: PhyActivity,
    Fruits: fruit,
    Veggies: Veggies,
    GenHlth: GenHlth,
    MentHlth: MentHlth,
    PhysHlth: PhysHlth,
    Sex: Sex,
    Age: Age,
    Education: Education,
    Income: Income,
  };
   

    // second form
  
  // let Pregnancies = parseInt(data.Pregnancies);
  // let Glucose = parseInt(data.Glucose);
  // let SkinThickness = parseInt(data.SkinThickness);
  // let DiabetesPedigreeFunction = parseInt(data.DiabetesPedigreeFunction);
  // let Insulin = parseInt(data.Insulin);



  // const formDataObject2 = {
  //   Pregnancies:Pregnancies,
  //   Glucose:Glucose,
  //   SkinThickness:SkinThickness,
  //   DiabetesPedigreeFunction:DiabetesPedigreeFunction,
  //   Insulin:Insulin,

  // } ;


  //third form

  // let Polyurea=parseInt(data.Polyurea);
  // let SuddenWeightLoss=parseInt(data.SuddenWeightLoss);
  // let Polyphagia=parseInt(data.Polyphagia);
  // let VisualBluring=parseInt(data.VisualBluring);
  // let Irritability =parseInt(data.Irritability );
  // let PartialParesis=parseInt(data.PartialParesis);
  // let Alopecia =parseInt(data.Alopecia );
  // let Polydipsia=parseInt(data.Polydipsia);
  // let Weakness=parseInt(data.Weakness);
  // let GenitalThrush=parseInt(data.GenitalThrush);
  // let Itching=parseInt(data.Itching);
  // let DelayedHealing=parseInt(data.DelayedHealing);
  // let MuscleStiffnes=parseInt(data.MuscleStiffnes);
  // let Obesity=parseInt(data.Obesity);


  // const formDataObject3={
  //   Polyurea:Polyurea,
  //   SuddenWeightLoss:SuddenWeightLoss,
  //   Polyphagia:Polyphagia,
  //   VisualBluring:VisualBluring,
  //   Irritability:Irritability,
  //   PartialParesis:PartialParesis,
  //   Alopecia:Alopecia,
  //   Polydipsia:Polydipsia,
  //   Weakness:Weakness,
  //   GenitalThrush:GenitalThrush,
  //   Itching:Itching,
  //   DelayedHealing:DelayedHealing,
  //   MuscleStiffnes:MuscleStiffnes,
  //   Obesity:Obesity,};

 

 
  console.log(formDataObject);
  return formDataObject;
};

export default convertFormData;
