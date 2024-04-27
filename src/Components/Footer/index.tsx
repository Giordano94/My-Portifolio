import { FC } from 'react';

import { Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: FC = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <IconButton
            href="mailto:giordano.mendes94@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.linkedin.com/in/giordanomendesbueno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://github.com/Giordano94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
