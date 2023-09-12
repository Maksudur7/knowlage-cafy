import profile from '../blocks/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 mx-4 border-b-2'>
            <h1 className='text-3xl font-extrabold'>Knowlage Cafy</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;