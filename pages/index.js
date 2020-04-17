import Link from 'next/link';
import Router from 'next/router';
import DogSize from './dogsize';


function clickSmall() {
    if (true) {
    Router.push("/lifestage");
    }
}

const DogSizePage = () => <div id="dogsizepage" onClick={clickSmall}>
    <Link href="/lifestage"><DogSize /></Link>
</div>

export default DogSizePage;