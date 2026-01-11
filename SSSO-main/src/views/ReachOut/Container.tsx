import React from "react"
import Component from "./Component"
import Papa from "papaparse"
import csvFilePath from "@assets/csv/office_bearer.csv"

const Container: React.FC = () => {
  const [csvData, setCSVData] = React.useState<Array<Array<string>>>([])

  React.useEffect(() => {
    fetch(csvFilePath)
      .then((response) => response.text())
      .then((responseText) => {
        // -- parse csv
        var data = Papa.parse(responseText)
        setCSVData((data?.data as Array<Array<string>>) || [])
      })
  }, [])

  return <Component csvData={csvData} />
}

export default Container
