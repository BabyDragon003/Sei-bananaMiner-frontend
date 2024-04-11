import { flexbox, styled } from "@mui/system";

import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Wrapper = styled("div")(({ theme }) => ({
    position: 'relative',
    maxWidth: 500,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
    },
}));

const WalletButton = styled("div")(() => ({
    display: 'flex',
    flexDirection: 'row-reverse'
}))


export default function Home() {

    return (
        <div>
            <Wrapper>
                <WalletButton>
                    <button variant="text" style={{
                        border: "5px solid black",
                        fontWeight: 900,
                        background: "transparent",
                        borderRadius: '10px',
                        color: 'black'
                    }} >Connect Wallet</button>
                </WalletButton>
                <Header />
                <BakeCard />
                <NutritionFacts />
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Wrapper>
        </div>
    );
}
