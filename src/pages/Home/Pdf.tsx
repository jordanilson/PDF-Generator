import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { SectionStyle } from "./style";
import { ChangeEvent, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const Pdf = () => {
  const [input, setInput] = useState<string | null>();
  function onchangeInput(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  const MyDoc = () => (
    <Document>
      <Page>
        <View style={styles.section}>
          <Text>{input}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <SectionStyle>
      <h2>Pdf Generator</h2>
      <div className="div-input-btn">
        <input
          type="text"
          onChange={onchangeInput}
          placeholder="Enter text to convert...."
        />
        <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
          <button>Dowload</button>
        </PDFDownloadLink>
      </div>
    </SectionStyle>
  );
};
