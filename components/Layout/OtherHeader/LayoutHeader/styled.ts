import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",
    padding: "20px 0",

    "@media (max-width: 950px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const ContactInfo = styled(Box)(() => {
  return {};
});

export const Tel = styled("a")(() => {
  return {
    display: "block",
    textDecoration: "none",
    marginBottom: 6,
    color: "#555",
    fontWeight: 600,
    fontSize: 13,
  };
});

export const Address = styled(Box)(() => {
  return {
    marginRight: "5px",
    color: "#979797",
    fontWeight: 600,
    fontSize: 13,
    lineHeight: "22px",
    width: "100%",
    maxWidth: 330,
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      color: "#3498db",
    },
  };
});

export const ContactAndFollow = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "@media (max-width: 950px)": {
      display: "none",
    },
  };
});

export const Follow = styled(Box)(() => {
  return {
    display: "flex",
    color: "white",
  };
});

export const Contact = styled(Box)(() => {
  return {
    display: "flex",
  };
});

export const FollowInfo = styled(Box)(() => {
  return {};
});

export const Title = styled(Box)(() => {
  return {
    marginBottom: 6,
    color: "#979797",
  };
});

export const WrapperFollow = styled(Box)(() => {
  return {
    display: "flex",
    marginLeft: 8,
  };
});

export const LinkA = styled("a")(() => {
  return {
    display: "flex",
    justifyContent: "center",
    padding: 5,
    borderRadius: "50%",
    backgroundColor: "rgba(95,95,95,0.73)",
    cursor: "pointer",
    marginRight: 6,
    transition: ".3s",

    "&:hover": {
      transition: ".3s",
      backgroundColor: "#00C1FF",
    },
  };
});

export const WrapperImg = styled(Box)(() => {
  return {
    marginRight: 12,
  };
});
