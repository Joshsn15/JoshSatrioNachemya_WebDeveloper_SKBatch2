import { Box, Typography } from "@mui/material";

import "../styles/fonts.css";

function RecruitmentSection() {
  return (
    <section className="recruitment-section">
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>

        <Typography variant="h1" sx=
          {{
            fontWeight: 750,
            fontFamily: "Extenda, sans-serif",
            fontSize: "8.5rem",
            mt: 4,
            mb: 2,
            color: "#FDFDFE",
            lineHeight: 0.7,
          }}>
          WE ARE LOOKING {<br />}FOR

          <Box sx={{
                color: "#fff",
                transition: "color 0.3s ease-in-out",

                "&:hover": {
                  color: "#CC310E",
                  boxShadow: "none",
                },
              }}>
            CREATIVE PEOPLE
          </Box>
        </Typography>
        <p>We are looking for talented individuals to join our team. If you are passionate about technology and want to make a difference, we would love to hear from you.</p>
      </Box>
    </section>
  );
}

export default RecruitmentSection;