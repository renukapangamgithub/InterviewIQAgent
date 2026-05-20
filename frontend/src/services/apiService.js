import axios from "axios";
import { serverURL } from "../App";

export async function googleAuthService(userData) {
  return await axios.post(`${serverURL}/api/auth/google`, userData, {
    withCredentials: true,
  });
}

export async function googleLogout() {
  return await axios.get(`${serverURL}/api/auth/logout`, {
    withCredentials: true,
  });
}

export async function resumeUpload(formdata) {
  return await axios.post(`${serverURL}/api/interview/resume`, formdata, {
    withCredentials: true,
  });
}

export async function startInterview(data) {
  return await axios.post(
    `${serverURL}/api/interview/generate-questions`,
    data,
    { withCredentials: true },
  );
}

export async function submitAnswerApi(data) {
  return await axios.post(`${serverURL}/api/interview/submit-answer`, data, {
    withCredentials: true,
  });
}

export async function finishInterviewReport(data) {
  return await axios.post(`${serverURL}/api/interview/finish`, data, {
    withCredentials: true,
  });
}

export async function getMyInterviewData() {
  return await axios.get(`${serverURL}/api/interview/get-interview`, {
    withCredentials: true,
  });
}

export async function getReportData(id) {
  return await axios.get(`${serverURL}/api/interview/report/${id}`, {
    withCredentials: true,
  });
}

export async function getPaymentDetails(data) {
  return await axios.post(`${serverURL}/api/payment/order`,
    data, {
    withCredentials: true,
  });
}

export async function verifyPayment(data) {
  return await axios.post(`${serverURL}/api/payment/verify`,
    data, {
    withCredentials: true,
  });
}


