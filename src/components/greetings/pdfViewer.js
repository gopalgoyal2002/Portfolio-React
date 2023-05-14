import React from "react";


import {Modal} from "antd";

const PdfViewer = ({pdf, onCancel, visible})=> {
   return( 
         <Modal visible={visible}
                onCancel={onCancel}
                maskClosable={false}
                width={"50%"}/>
         )
};

export default PdfViewer;