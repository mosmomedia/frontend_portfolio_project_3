/* global kakao */
import { useEffect } from 'react';

const Map = () => {
	useEffect(() => {
		let container = document.getElementById('map');

		let options = {
			center: new window.kakao.maps.LatLng(37.5493742, 127.051186),
			level: 3,
		};

		let map = new window.kakao.maps.Map(container, options);

		var markerPosition = new kakao.maps.LatLng(37.5493742, 127.051186);

		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			position: markerPosition,
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);
	}, []);

	return <div id="map"></div>;
};

export default Map;
