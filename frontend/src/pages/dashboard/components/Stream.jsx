import { useEffect } from 'react';
import { useMyClassContext } from '../../../contexts/myClassRoom/MyClassContext';

function Stream() {
	const { myClassList } = useMyClassContext();

	useEffect(() => {
		if (myClassList.length > 0) {
			console.log(myClassList);
		}
	}, [myClassList]);

	return <div>Stream</div>;
}

export default Stream;
