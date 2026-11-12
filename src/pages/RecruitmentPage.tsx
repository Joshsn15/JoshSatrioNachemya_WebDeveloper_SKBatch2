import { useState } from "react";
import { Container, Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";

import "../styles/fonts.css";
import Applicant from "../types/applicants";
import { jobs } from "../types/job-applicant";

export function RecruitmentPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [jobId, setJobId] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", jobId: "" });
    const [applicants, setApplicants] = useState<Applicant[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            name: name.trim() ? "" : "Name is required",
            email: email.includes("@") ? "" : "Enter a valid email",
            phone: phone.trim() ? "" : "Phone is required",
            jobId: jobId ? "" : "Please select a job position",
        };
        setErrors(newErrors);

        if (Object.values(newErrors).every((msg) => msg !== "")) {
            return
        }
        else {

            setApplicants((prevApplicants) => [
                ...prevApplicants,
                new Applicant(prevApplicants.length + 1, name, email, phone, parseInt(jobId)),

            ]);
            alert("Application sent!");

            console.log(applicants[applicants.length - 1]);

            setName("");
            setEmail("");
            setPhone("");
            setJobId("");
        }

    };


    const fieldSx = { width: { xs: "14rem", sm: "20rem" } };

    return (

        <Container sx={{
            maxWidth: "90%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            minHeight: "40dvh",
            py: 4,
            width: { xs: "100%", sm: "80%", md: "50%" },
            borderRadius: 2,
            boxShadow: 3,
        }}>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
            }}>
                <Button
                    onClick={() => navigate("/")}
                    sx={{
                        alignSelf: "flex-start",
                        color: "#0B2A4A",
                        mb: 1,
                    }}
                >
                    ← Back
                </Button>

                <Typography sx={{
                    fontWeight: 750,
                    fontFamily: "Extenda, sans-serif",
                    fontSize: { xs: "2.25rem", md: "5rem" },
                    color: "#0B2A4A",
                }}>
                    RECRUITMENT FORM
                </Typography>

                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        rowGap: 3,
                    }}>
                    <TextField
                        required
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={fieldSx}
                    />
                    <TextField
                        required
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={fieldSx}
                    />
                    <TextField
                        required
                        label="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        sx={fieldSx}
                    />
                    <TextField
                        select
                        label="Job Position"
                        value={jobId}
                        onChange={(e) => setJobId(e.target.value)}
                        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
                        error={!!errors.jobId}
                        helperText={errors.jobId}
                    >
                        {jobs.map((job) => (
                            <MenuItem key={job.id} value={job.id.toString()}>
                                {job.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button type="submit" variant="contained" sx={{ bgcolor: "#CC310E", ...fieldSx }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}