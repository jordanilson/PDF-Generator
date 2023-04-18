import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { SectionStyle } from "./style";
import { ChangeEvent, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

interface ConfigStyle {
  flexDirectionStyle: string | any;
  backgroundColorStyle: string;
  marginStyle: number;
  paddingStyle: number;
  flexGrowStyle: number;
}

const obgConfigStyle: ConfigStyle = {
  flexDirectionStyle: "row",
  backgroundColorStyle: "#E4E4E4",
  marginStyle: 10,
  paddingStyle: 10,
  flexGrowStyle: 1,
};

const styles = StyleSheet.create({
  page: {
    flexDirection: obgConfigStyle.flexDirectionStyle,
    backgroundColor: obgConfigStyle.backgroundColorStyle,
  },
  section: {
    margin: obgConfigStyle.marginStyle,
    padding: obgConfigStyle.paddingStyle,
    flexGrow: obgConfigStyle.flexGrowStyle,
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
