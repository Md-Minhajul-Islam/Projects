const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
    (position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", {latitude, longitude});
    },
    (error) => {
        console.log(error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    );   
};


// chittagong location = 22.3569, 91.7832 
const map = L.map("map").setView([22.3569, 91.7832 ], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Real-Time Tracking"
}).addTo(map);


const markers = {};


socket.on("received-location", (data) => {

    const { id, latitude, longitude } = data;

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    }
    else {
        markers[id] = L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup(`User: ${id}`)
            .openPopup();
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});