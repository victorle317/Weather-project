var datas = [{ "id": 2801268, "name": "London, City of London, Greater London, United Kingdom", "region": "City of London, Greater London", "country": "United Kingdom", "lat": 51.52, "lon": -0.11, "url": "london-city-of-london-greater-london-united-kingdom" }, { "id": 2796590, "name": "Holborn, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.52, "lon": -0.12, "url": "holborn-camden-greater-london-united-kingdom" }, { "id": 2812957, "name": "St Giles, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.52, "lon": -0.12, "url": "st-giles-camden-greater-london-united-kingdom" }, { "id": 2791655, "name": "Finsbury, Islington, Greater London, United Kingdom", "region": "Islington, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.11, "url": "finsbury-islington-greater-london-united-kingdom" }, { "id": 2786308, "name": "Clerkenwell, Islington, Greater London, United Kingdom", "region": "Islington, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.11, "url": "clerkenwell-islington-greater-london-united-kingdom" }, { "id": 2781746, "name": "Bloomsbury, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.12, "url": "bloomsbury-camden-greater-london-united-kingdom" }, { "id": 2813087, "name": "St Pancras, Camden, Greater London, United Kingdom", "region": "Camden, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.12, "url": "st-pancras-camden-greater-london-united-kingdom" }, { "id": 2813948, "name": "Strand, Westminster, Greater London, United Kingdom", "region": "Westminster, Greater London", "country": "United Kingdom", "lat": 51.51, "lon": -0.12, "url": "strand-westminster-greater-london-united-kingdom" }, { "id": 2813028, "name": "St Luke's, Islington, Greater London, United Kingdom", "region": "Islington, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.09, "url": "st-lukes-islington-greater-london-united-kingdom" }, { "id": 2811665, "name": "Shoreditch, Hackney, Greater London, United Kingdom", "region": "Hackney, Greater London", "country": "United Kingdom", "lat": 51.53, "lon": -0.09, "url": "shoreditch-hackney-greater-london-united-kingdom" }]
var container = document.querySelector('#results');
var timeoutList = []
var LocationDetail = {
    latitude:null,
    longitude: null,
};


function getLocation(e) {
    e.preventDefault()
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    LocationDetail.longitude = position.coords.longitude
    LocationDetail.latitude  = position.coords.latitude
    console.log(LocationDetail) 
}

function RealTimeSearch() {

    console.log('clicked')
    document.querySelector('#mySearch').removeAttribute('onchange')
    document.querySelector('#mySearch').setAttribute('onkeyup', "myFunction()")

}
function DisableRealTimeSearch() {
    console.log('clicked')
    document.querySelector('#mySearch').removeAttribute('onkeyup')
    document.querySelector('#mySearch').setAttribute('onchange', "myFunction()")
}
function render(datas) {
    var myMenu = document.querySelector('#myMenu')
    myMenu.innerHTML = ''
    datas.forEach(place => {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.setAttribute('href', '#')
        a.setAttribute('id',`${place.id}`)
        //   a.style.display = 'none'
        a.textContent = place.name
        li.appendChild(a)
        //   console.log(li);
        //   console.log(a)
        myMenu.appendChild(li)
    });
}

// render(datas)
// đợi người dùng ko nhập gì nữa thì mới search, clear settimeout

async function myFunction() {
    // Declare variables
    let input, filter, ul, li;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // console.log('clear1')
    // console.log(timeoutList)
    timeoutList.forEach(v => {
        clearTimeout(v)
        // console.log(v)
    })
    // clearTimeout(settimeout)
    // console.log('clear1')
   

    timeoutList.push(setTimeout(async function () {
        // console.log('chạy settimeout')
        if (filter != '') {
           SearchAPICall(filter)
        }
        // else if(LocationDetail.latitude !=null){
        //     SearchAPICall(filter,LocationDetail)
        // }
    }, 1500))


}

async function SearchAPICall(filter, LocationDetail){
    await axios.get(`http://api.weatherapi.com/v1/search.json?key=7b5133a15d544fd2938162305201910&q=${filter}&lang=vi`)
        .then(function (response) {
            console.log(response.data);
            // console.log(response);

            let data = response.data
            if (data.length === 0) {
                // alert(`The system responded with Error . Please search again`)
            } else {
                render(data)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            console.log('success')

        });
}