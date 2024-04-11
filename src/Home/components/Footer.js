import Grid from "@mui/material/Grid";

import tgIcon from "../assets/TGIcon.png";
import twIcon from "../assets/TWIcon.png";

export default function Footer() {
    return (
        <Grid container justifyContent="center" spacing={2} marginTop={4}>
            {/* <Grid item>
        <a href="" target="__blank">
          <img src={solIcon} alt="" width={48} height={48} />
        </a>
      </Grid> */}
            <Grid item>
                <a href="https://twitter.com/BananaMiner_" target="__blank">
                    <img src={twIcon} alt="" width={48} height={48} />
                </a>
            </Grid>
            <Grid item>
                <a href="https://t.me/BananaMinerPortal" target="__blank">
                    <img src={tgIcon} alt="" width={48} height={48} />
                </a>
            </Grid>
        </Grid>
    );
}
