import vLogo    from  '../../../public/images/powers/powers-brand.svg';
import vCustom  from  '../../../public/images/powers/logomark-h-white.png'

export default function ApplicationLogo(props) {

    return (

        <img {...props}  src={props.logotype === 1? vLogo: vCustom} alt="The Powers Company"/>
    );
}
