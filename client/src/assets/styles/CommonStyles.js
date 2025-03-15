import styled from "@emotion/styled";
import { Box, Button, IconButton, Typography } from "@mui/material";

export const Title = styled(Typography)({
    fontWeight: 500,
    marginBottom: "12px",
});

export const SubTitle = styled(Typography)({
    fontWeight: 600,
    marginBottom: "12px",
});

export const Heading = styled(Typography)({
    fontWeight: 600,
    marginBottom: "12px",
});

export const Button1 = styled(Button)({
    background: "#00ab6b",
    color: "#FFFFFF",
    textTransform: "none",
    transition: "200ms all",
    marginTop: "6px",
    marginBottom: "6px",
    minWidth: "80px",
    padding: "6px",
    "&:hover": {
        background: "#00ab6b",
        color: "#FFFFFF",
        transform: "scale(1.05)",
    },
});

export const Button2 = styled(Button)({
    background: "#e8f3ec",
    color: "#00ab6b",
    textTransform: "none",
    transition: "200ms all",
    margin: "6px",
    padding: "6px",
    "&:hover": {
        background: "#e8f3ec",
        color: "#00ab6b",
        transform: "scale(1.05)",
    },
});

export const Button3 = styled(Button)({
    background: "#FFFFFF",
    color: "#00ab6b",
    textTransform: "none",
    transition: "200ms all",
    margin: "6px",
    padding: "6px",
    minWidth: "80px",
    border: "1px solid #00ab6b",
    "&:hover": {
        background: "#FFFFFF",
        color: "#00ab6b",
        transform: "scale(1.05)",
    },
});

export const Button4 = styled(IconButton)({
    background: "#FFFFFF",
    color: "#00ab6b",
    textTransform: "none",
    transition: "200ms all",
    margin: "8px",
    padding: "8px",
    border: "1px solid #00ab6b",
    "&:hover": {
        background: "#FFFFFF",
        color: "#00ab6b",
        transform: "scale(1.05)",
    },
});

export const FlexCenter = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
});

export const FlexStart = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
});

export const FlexCenterMin = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
});
