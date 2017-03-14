// ====================================================================================================
//
// Cloud Code for AuthenticationResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
if(Spark.getPlayer() !== null){
   var request = new SparkRequests.AccountDetailsRequest().Send().location.country;
   switch (request){
       case "CN":
           Spark.getPlayer().setSegmentValue("COUNTRY_SEG", "CN_COUNTRY_SEGVAL")
        break;
        case "JP":
           Spark.getPlayer().setSegmentValue("COUNTRY_SEG", "JP_COUNTRY_SEGVAL")
        break;
        case "NZ":
           Spark.getPlayer().setSegmentValue("COUNTRY_SEG", "NZ_COUNTRY_SEGVAL")
        break;
        case "PL":
           Spark.getPlayer().setSegmentValue("COUNTRY_SEG", "PL_COUNTRY_SEGVAL")
        break;
        case "RU":
           Spark.getPlayer().setSegmentValue("COUNTRY_SEG", "RU_COUNTRY_SEGVAL")
        break;
        case "GB":
           Spark.getPlayer().setSegmentValue("COUNTRY_SEG", "UK_COUNTRY_SEGVAL")
        break;
   }

}