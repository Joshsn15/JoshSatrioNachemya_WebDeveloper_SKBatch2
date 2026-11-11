import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { links } from "../types/NavigationBar";
import  logo from "../assets/logo.png"
function NavigationBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar
                position="sticky"
                elevation={-1}
                sx={{ bgcolor: "transparent" }}
            >
                <Toolbar sx={{
                    px: {
                        xs: 2,
                        md: 6
                    },
                    minHeight: {
                        xs: 64,
                        md: 80
                    }
                }}>
                    <Box sx={{ flex: 1 }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="logo"
                            sx={{
                                height: {
                                    xs: 62,
                                    md: 70,
                                    lg: 76,
                                },
                                width : "auto",
                                display: "block"
                            }}
                        />
                    </Box>

                    <Box sx={{
                        display: {
                            xs: "none",
                            md: "flex"
                        },
                        alignItems: "center",
                        gap: 1
                    }}>
                        {links.map((l) => (
                            <Button 
                                key={l.label}
                                href={l.href}
                                sx={{
                                    color: "#fff",
                                    fontWeight: 750,
                                    borderRadius: 2,
                                    px: {
                                        xs: 1,
                                        md: 2 },
                                    "&:hover": { bgcolor: "#f0f0f0", color: "#CC310E" },
                                }}
                            >
                                <Typography sx={{fontFamily: "ID-Grotesk, sans-serif", fontWeight: 700}}>{l.label}</Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Button
                            variant="contained"
                            href="#apply"
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "inline-flex"
                                },
                                bgcolor: "#fff",
                                color: "#111",
                                fontWeight: 700,
                                borderRadius: 2,
                                px: 3,
                                boxShadow: "none",
                                "&:hover": { bgcolor: "#f0f0f0", boxShadow: "none", color: "#CC310E" },
                            }}
                        >
                            <Typography sx={{fontFamily: "ID-Grotesk, sans-serif", fontWeight: 700}}>JOIN US!</Typography>
                        </Button>
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            onClick={() => setOpen(true)}
                            sx={{ display: { md: "none" } }}
                        >
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Menu mobile */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 240, pt: 2 }} role="presentation">
                    <List>
                        {links.map((l) => (
                            <ListItemButton
                                key={l.label}
                                component="a"
                                href={l.href}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemText primary={l.label} />
                            </ListItemButton>
                        ))}
                    </List>
                    <Box sx={{ px: 2 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            href="#apply"
                            onClick={() => setOpen(false)}
                        >
                            LET'S GO!
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

export default NavigationBar;