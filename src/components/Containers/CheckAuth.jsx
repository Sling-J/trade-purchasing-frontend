export const Authorized = props => (
   props.children || null
);

export const Unauthorized = props => (
   props.children || null
);

const CheckAuth = ({children}) => localStorage.getItem('token') ?
   (children[0] || null):
   (children[1] || null);

export default CheckAuth;
