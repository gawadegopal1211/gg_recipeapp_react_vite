import React, { useContext } from "react";
import {
    Box,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../assets/images/pizza-icon.png";
import logo1 from "../assets/images/pizza-icon.png";
import { FlexBetween, FooterBox } from "../assets/styles/FooterStyles";
import { modeContext } from "../App";
import { FlexCenterMin, FlexStart } from "../assets/styles/CommonStyles";

const Footer = () => {
    const mode = useContext(modeContext);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <FooterBox
            sx={{
                backgroundColor: mode.mode === "dark" ? "#484848" : "#e8f3ec",
                color: "text.primary",
            }}
        >
            <FlexBetween>
                <FlexCenterMin>
                    {!matches ? (
                        <img
                            src={mode.mode === "dark" ? logo : logo1}
                            alt=""
                            height={"50px"}
                            width={"50px"}
                        />
                    ) : null}

                    <Typography
                        variant={matches ? "h6" : "h5"}
                        sx={{ ml: 1, fontWeight: 600, fontFamily: "Oswald" }}
                    >
                        GG Recipes
                    </Typography>
                </FlexCenterMin>

                <Box sx={{ textAlign: "left", minWidth: "200px" }}>
                    <FlexStart>
                        <Typography variant="body1" sx={{ p: 1 }}>
                            How to reach me?
                        </Typography>

                        <a href="https://in.linkedin.com/in/gawadegopal1211">
                            <IconButton
                                sx={{
                                    p: 1,
                                    color: mode.mode === "dark" ? "text.primary" : "#00ab6b",
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </a>

                        <a href="https://github.com/gawadegopal1211">
                            <IconButton
                                sx={{
                                    p: 1,
                                    color: mode.mode === "dark" ? "text.primary" : "#00ab6b",
                                }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </a>
                    </FlexStart>

                    <ul>
                        <li>
                            <Typography variant="body2">
                                This project is made for learning purpose only.
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body2">
                                Developed a recipe application using React, JavaScript, HTML,
                                CSS, Material UI, Node.js, Express.js, and MongoDB.
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body2">
                                All images by{" "}
                                <a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=575436">
                                    OpenClipart-Vectors
                                </a>{" "}
                                from{" "}
                                <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=575436">
                                    Pixabay.
                                </a>
                            </Typography>
                        </li>

                        <li>
                            <Typography variant="body2">
                                All blogs generated using AI.
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </FlexBetween>
        </FooterBox>
    );
};

export default Footer;
