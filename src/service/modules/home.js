import axiosInstance from "../index"

export function getTabsData() {
  return axiosInstance.get('tabs')
}

export function getIconsData() {
  return axiosInstance.get('icons')
}

export function getPastExperienceData() {
  return axiosInstance.get('past-experience')
}

export function getHomeFooterData() {
  return axiosInstance.get('home-footer')
}

