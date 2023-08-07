import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useAppSelector } from 'src/app/store';
import { selectCompanies } from '../slices/companySlice';
import { calcTotalESG } from '../lib';
import { useSearchParams } from 'react-router-dom';

const CompanyESGGrafic = () => {
  const [searchParams] = useSearchParams();
  const companies = useAppSelector(selectCompanies);
  const company = companies.find((company) => company.id === Number(searchParams.get('companyId')));

  useLayoutEffect(() => {

    const root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );

    const MONTH_DATA = [
      'Dec 2022',
      'Jan 2023',
      'Feb 2023',
      'March 2023',
      'Apr 2023',
      'May 2023',
      'Jun 2023',
      'Jul 2023',
    ]

    // Define data
    const data = MONTH_DATA.map((month, idx) => ({
      date: month,
      value: calcTotalESG(idx, company?.esg)
    }));

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "date"
      })
    );
    xAxis.data.setAll(data);

    // Create series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Total",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "date"
      })
    );
    series.data.setAll(data);

    // Add legend
    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, [searchParams, company]);

  return (
    <div className="bg-white p-4 rounded-lg w-full flex flex-col gap-4">
      <div className="text-lg text-gray-800">Dynamics of changes in the overall ESG (Total)</div>
      <div id="chartdiv" className="h-[500px] w-full"></div>
    </div>
  );
};

export default CompanyESGGrafic;
