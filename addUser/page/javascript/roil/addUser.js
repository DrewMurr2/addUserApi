function login() {
    /*    var us = document.getElementById("usr").value
        var pw = document.getElementById("pwd").value
        options = {
            url: "https://apitestererer.azurewebsites.net/api/BoxControl?user=" + us + "&password=" + pw
                //    url: "  http://localhost:13153/api/BoxControl?user=" + us + "&password=" + pw
                , type: "GET"
            , }
                $.ajax(options).success(function (response) {
                    var tempO = JSON.parse(response);
                    wells.wells = tempO[1]
                    wells.username = us
                    generateTable(wells)
                });
            if (us == 'Sim' && pw == 'Demo') {}
            else {
                alert('Login Denied')
            }*/
}

function addUser(firstname, lastname, email, pwd, company, allWells, Engineer, Accounting, Coordinator, FieldHand) {
    var user = {
        firstname: firstname
        , lastname: lastname
        , email: email
        , password: pwd
        , company: company
        , permissions: {
            allWellsByMyCompany: allWells
            , wells: [{
                Wellname: "Well1"
                , Live: true
                , Services: {
                    GammaLogs: true
                    , Surveys: true
                }
            }, {
                Wellname: "Well2"
                , Live: false
                , Services: {
                    GammaLogs: false
                    , Surveys: false
                }
            }]
            , engineer: Engineer
            , accountant: Accounting
            , coordinator: Coordinator
            , fieldhand: FieldHand
        }
    }
    $.ajax({
        type: "POST"
        , data: JSON.stringify(user)
        , url: "http://roilapi.azurewebsites.net/api/UserSettings"
        , contentType: "application/json"
    }).done(function (res) {
        userProfile = JSON.parse(res)
        console.log(res);
        console.log(userProfile)
            // Do something with the result :)
    });
}
var userProfile