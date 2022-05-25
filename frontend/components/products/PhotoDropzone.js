import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import ThumbCover from "./ThumbCover";
import { RiAddBoxFill } from "react-icons/ri";

function PhotoDropzone({ value, setFieldValue, reset, setReset }) {
  const [files, setFiles] = useState(value);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles([
        ...[
          ...acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
          ...files,
        ].slice(0, 3),
      ]);
      setFieldValue(
        "photo",
        acceptedFiles.map((file) => file.preview)
      );
    },
  });

  useEffect(() => {
    if (reset) {
      setFiles([0, 0, 0]);
      setReset(false);
    }
  }, [reset]);

  return (
    <div>
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input type="photo" name="photo" {...getInputProps()} />
        <p>
          Drag 'n' drop some photos here</p>
          <RiAddBoxFill size={30} />
          <p>
          or click to select files
        </p>
        <ThumbsContainer>
          {files.map((file, index) => (
            <ThumbCover key={index} image={file.preview} />
          ))}
        </ThumbsContainer>
      </Container>
    </div>
  );
}

export default PhotoDropzone;

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
  return "var(--main-text-color-light-3)";
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 3rem;
  padding: 1rem;
  border-width: 1px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color-light-3);
  outline: none;
  transition: border 0.2s ease-in-out;
`;

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-direction: row;
  }
`;
