import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import ThumbCover from "./ThumbCover";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "var(--success)";
  }
  if (props.isDragReject) {
    return "var(--danger)";
  }
  if (props.isFocused) {
    return "var(--primary)";
  }
  return "var(--light)";
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-width: 1px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.2s ease-in-out;
`;

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

function PhotoDropzone(props) {
  const [files, setFiles] = useState([0, 0, 0]);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles([...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)})), ...files].slice(0, 3));
    },
  });

  return (
    <div>
      <div className="container">
        <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some photos here <br /> or 
          <br/>click to select files</p>
        <ThumbsContainer>
          {files.map((file) => (
              <ThumbCover key={file.name} image={file.preview} />
          ))}
          </ThumbsContainer>
        </Container>
      </div>
    </div>
  );
}

export default PhotoDropzone;
