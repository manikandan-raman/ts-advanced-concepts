// object and arrays

interface Mobile {
  os: "android" | "ios";
  name: string;
  launchYear: number;
}

const mobile: Mobile = {
  os: "android",
  name: "Google Pixel 8",
  launchYear: 2023,
};

const mobiles: Mobile[] = [
  {
    os: "android",
    name: "Google Pixel 8",
    launchYear: 2023,
  },
  {
    os: "ios",
    name: "iPhone 13",
    launchYear: 2021,
  },
];
