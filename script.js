function initMaps() {
    const locations = [
        { id: 'map-taladrona', lat: -8.911310090894116, lng: 13.202466667547814 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        { id: 'map-chicala', lat: -8.825, lng: 13.235 },
        // Add more locations similarly
    ];

    locations.forEach(location => {
        const map = new google.maps.Map(document.getElementById(location.id), {
            zoom: 15,
            center: { lat: location.lat, lng: location.lng },
        });
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
        });
    });
}

document.addEventListener('DOMContentLoaded', initMaps);
