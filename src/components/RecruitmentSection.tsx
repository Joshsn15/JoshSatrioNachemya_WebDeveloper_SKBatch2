import { Box, Button, Grid, Typography } from "@mui/material";

import "../styles/fonts.css";
import { jobs } from "../types/job-applicant";

function RecruitmentSection() {
  return (
    <section className="recruitment-section">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: { xs: 2, md: 4 },
          pt: { xs: 2, md: 6 }, //  navbar
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 750,
            fontFamily: "Extenda, sans-serif",
            fontSize: { xs: "4rem", sm: "5rem", md: "9rem", lg: "8.5rem" },
            lineHeight: { xs: 0.9, md: 0.75 },
            mt: { xs: 0, md: 4 },
            mb: { xs: 2, md: 1 },
            color: "#FDFDFE",
          }}
        >
          WE ARE LOOKING FOR
          <Box
            component="span"
            sx={{
              display: "block",
              color: "#fff",
              transition: "color 0.3s ease-in-out",
              "&:hover": { color: "#CC310E" },
            }}
          >
            CREATIVE PEOPLE
          </Box>
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            fontFamily: "ID-Grotesk, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "0.95rem", md: "0.9rem" },
            mb: { xs: 3, md: 4 },
            width: { xs: "100%", sm: "70%", md: "40%" },
          }}
        >
          Bring your creativity, challenge the ordinary, and let's design
          experiences worth remembering. Join our team!
        </Typography>
      </Box>

      <section className="apply-section">
        <Box sx={{ px: { xs: 2, md: 6 }, pb: { xs: 4, md: 6 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {jobs.map((job) => (
              <Grid key={job.id} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: "100%", 
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    bgcolor: "#FDFDFE",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: 2,
                    p: { xs: 2, md: 1 },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 750,
                      fontFamily: "Extenda, sans-serif",
                      fontSize: { xs: "2.25rem", md: "3rem" },
                      mt: 1,
                      color: "#0B2A4A",
                    }}
                  >
                    {job.name}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      listStyleType: "disc",
                      pl: 3,
                      pr: 1,
                      my: 2,
                      textAlign: "left",
                      fontFamily: "ID-Grotesk, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "0.9rem", md: "0.79rem" },
                    }}
                  >
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </Box>

                  <Box sx={{ mt: "auto", display: "flex", justifyContent: "center", }}>
                    <Button
                      sx={{
                        bgcolor: "#CC310E",
                        color: "#fff",
                        fontWeight: 700,
                        fontFamily: "ID-Grotesk, sans-serif",
                        fontSize: "0.9rem",
                        width: { xs: "100%", sm: "8rem" },
                        py: 1.25,
                        my: 2,
                        "&:hover": {
                          bgcolor: "#f0f0f0",
                          color: "#CC310E",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
    </section>
  );
}

export default RecruitmentSection;