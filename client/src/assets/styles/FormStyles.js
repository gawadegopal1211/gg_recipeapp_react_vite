import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FormBox = styled(Box)({
  maxWidth: "700px",
  paddingTop: "12px",
  padding: "8px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  gap: "12px",
});

export const FormSubmit = styled(Box)({
  height: "100%",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
});

export const FormHeading = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  background: "#00ab6b",
  color: "#FFFFFF",
});

export const FormSpan = styled(Box)({
  padding: "0px",
  margin: "0px",
  textAlign: "left",
  width: "100%",
  color: "red",
});
