import { Link } from 'react-router-dom';
import {styled} from '../../stitches.config';

export const Container = styled(Link, {

    display: 'flex',
    width: '100%',
    height: '162px',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '@lg': {
        height: '324px'
    },

    img: {
        borderRadius: '2rem',
        objectFit: 'cover'
    },

    h1: {
        position: 'absolute',
        top: 20,
        left: 15,
        textTransform: 'uppercase',
        textShadow: '0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black'
    }

});