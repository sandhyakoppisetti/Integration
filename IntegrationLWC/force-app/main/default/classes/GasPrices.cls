public with sharing class GasPrices {
    @AuraEnabled(cacheable=true)
    public static string getGasPrices(string searchState){
        try {
            
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        
        request.setEndpoint('https://api.collectapi.com/gasPrice/stateUsaPrice?state='+searchState);
        request.setMethod('GET');
        request.setHeader('authorization', 'apikey 0PLPH6nbnwq4tVcQCrLg8B:5XmNqHgSo2A6hy6M1SaHqn');
		
            HttpResponse response = http.send(request);
                      if (response.getStatusCode() == 200) {
                return response.getBody();
            } else {
                String errorMessage = 'Error: ' + response.getStatusCode() + '-' + response.getStatus();
                return errorMessage;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
