import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectDescriptionContent = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Solution Overview
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ marginTop: "32px" }}>
        Repo
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ whiteSpace: "pre-line", marginBottom: "16px" }}
      >
        This solution is composed of 2 repositories:
        <Box sx={{ marginTop: "8px" }}>
          <a
            href="https://github.com/paddywide/ExchangeServiceAPI"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            ExchangeServiceAPI
          </a>
        </Box>
        <Box sx={{ marginTop: "8px" }}>
          <a
            href="https://github.com/paddywide/ExchangeRate-React"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            ExchangeRate-React
          </a>
        </Box>
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ marginTop: "32px" }}>
        Technologies Employed
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ whiteSpace: "pre-line", marginBottom: "16px" }}
      >
        <Box sx={{ marginTop: "16px" }}>
          <strong>API:</strong>
        </Box>
        <Box component="ul" sx={{ marginTop: "8px", paddingLeft: "16px" }}>
          <li>
            <strong>Architecture and Pattern:</strong> Clean Architecture,
            Result Pattern, Domain Event, Aggregate, Repository Pattern
          </li>
          <li>
            <strong>.Net Core 8:</strong> Primitive and Value Object,
            httpClientFactory
          </li>
          <li>
            <strong>Security:</strong> JWT, OAuth2.0
          </li>
          <li>
            <strong>NuGet:</strong> Exception middleware, MediatR,
            FluentValidation, AutoMapper
          </li>
          <li>
            <strong>DB:</strong> SQLite, Code First
          </li>
        </Box>

        <Box sx={{ marginTop: "32px" }}>
          <strong>AWS:</strong>
        </Box>
        <Box component="ul" sx={{ marginTop: "8px", paddingLeft: "16px" }}>
          <li>
            <strong>Instance:</strong> EC2
          </li>
          <li>
            <strong>Web server:</strong> Nginx
          </li>
          <li>
            <strong>Storage:</strong> S3
          </li>
          <li>
            <strong>CI/CD:</strong> CodePipeline, CodeBuild, CodeDeploy
          </li>
          <li>
            <strong>Containerized CI/CD:</strong> Docker, Github Actions, ECR, ECS, Fargate
          </li>
          </Box>

 
        <Box sx={{ marginTop: "32px" }}>
          <strong>Functionality:</strong>
        </Box>
        <Box component="ul" sx={{ marginTop: "8px", paddingLeft: "16px" }}>
          <li>
            <strong>Authentication:</strong> It has Login, Register, and Logout
            functions. When a user logs out, it saves the token to the blacklist.
          </li>
          <li>
            <strong>Exchange Rate:</strong>  It uses httpClientFactory to get the
            exchange rate from a 3rd-party API and saves the reques body to the database.
          </li>
          <li>
            <strong>React:</strong> Convert button is only enable when loggin. It can display login errors received from the
            API.
          </li>
        </Box>

      </Typography>
    </>
  );
};

export default ProjectDescriptionContent;
