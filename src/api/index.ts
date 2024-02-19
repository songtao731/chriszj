import axios from "@/util/axios";

export const useMockList = (data: any) => {
  return axios({
    url: `https://dev.usemock.com/64c71d4d9da07a32750363e5/dataList`,
    method: "get",
    params: data,
  });
};
//差旅申请列表
export const listRole = (data: any) => {
  return axios({
    url: "http://118.184.183.199:9141/system/role/list",
    method: "get",
    params: data,
  });
};
export const uolodfFn = (data: any) => {
  return axios({
    url: "http://118.184.183.199:9141/system/file/upload",
    method: "get",
    params: data,
  });
};

//招待申请列表
export const entertainApplicationAddList = (data: any) => {
  return axios({
    url: `https://gateway-uat.zhidabl.com/dr-garage-car-service/dr-garage-car/tCarStorehouse/list`,
    method: "get",
    params: data,
  });
};
//团建申请列表
export const teamBuildingApplicationAddList = (data: any) => {
  return axios({
    url: `http://118.184.183.199:9141/poiInfo/findCustomerReviewsOne/114`,
    method: "get",
    params: data,
  });
};
//差旅报销
export const travelReimbursementAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/travelReimbursement/getBasePage`,
    method: "get",
    params: data,
  });
};
//招待报销
export const entertainReimbursementAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/entertainReimbursement/getBasePage`,
    method: "get",
    params: data,
  });
};
//团建报销列表
export const teamBuildingReimbursementAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/teamBuildingReimbursement/getBasePage`,
    method: "get",
    params: data,
  });
};
//其他报销
export const otherReimbursementAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/otherReimbursement/getBasePage`,
    method: "get",
    params: data,
  });
};
//个人暂支
export const personalTemporaryExpensesAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/personalTemporaryExpenses/getBasePage`,
    method: "get",
    params: data,
  });
};
//暂支还款
export const temporaryRepaymentAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/temporaryRepayment/getBasePage`,
    method: "get",
    params: data,
  });
};

//暂支台账
export const borrowRepaymentLedgerAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/borrowRepaymentLedger/getBasePage`,
    method: "get",
    params: data,
  });
};
//一次性采购合同
export const procurementContractLedgerOneAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/procurementContractLedgerOne/getBasePage`,
    method: "get",
    params: data,
  });
};
//框架采购合同
export const procurementContractLedgerFrameworkAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/procurementContractLedgerFramework/getBasePage`,
    method: "get",
    params: data,
  });
};
//有付款合同
export const paymentContractAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/paymentContract/getBasePage`,
    method: "get",
    params: data,
  });
};
//无付款合同
export const paymentNoContractAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/paymentNoContract/getBasePage`,
    method: "get",
    params: data,
  });
};
//其他付款
export const otherPaymentAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/otherPayment/getBasePage`,
    method: "get",
    params: data,
  });
};
//销售合同一次性
export const salesContractLedgerOneAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/salesContractLedgerOne/getBasePage`,
    method: "get",
    params: data,
  });
};
//销售合同框架
export const salesContractLedgerFrameworkAddList = (data: any) => {
  return axios({
    url: `/financial-center-business/salesContractLedgerFramework/getBasePage`,
    method: "get",
    params: data,
  });
};
//销售总额(一次性)
export const salesContractLedgerOneSumAmount = () => {
  return axios({
    url: `/financial-center-business/salesContractLedgerOne/getSumAmount`,
    method: "get",
  });
};
//销售总额(一次性)
export const salesContractLedgerFrameworkSumAmount = () => {
  return axios({
    url: `/financial-center-business/salesContractLedgerFramework/getSumAmount`,
    method: "get",
  });
};

//采购总额(一次性)
export const procurementContractLedgerOneSumAmount = () => {
  return axios({
    url: `/financial-center-business/procurementContractLedgerOne/getSumAmount`,
    method: "get",
  });
};
//采购合同台账金额汇总(框架)
export const procurementContractLedgerFrameworkSumAmount = () => {
  return axios({
    url: `/financial-center-business/procurementContractLedgerFramework/getSumAmount`,
    method: "get",
  });
};
//根据当前用户信息获取OA系统的token
export const getTokenByUsername = (data: any) => {
  return axios({
    url: `/financial-center-business/message/getTokenByUsername`,
    method: "get",
    params: data,
  });
};
//借款记录

export const borrowRecordList = (data: any) => {
  return axios({
    url: `/financial-center-business/borrowRecord/getBasePage`,
    method: "get",
    params: data,
  });
};
//在途还款
export const getFreezeBasePage = (data: any) => {
  return axios({
    url: `/financial-center-business/repaymentRecord/getFreezeBasePage`,
    method: "get",
    params: data,
  });
};
//已还款
export const getRepaidBasePage = (data: any) => {
  return axios({
    url: `/financial-center-business/repaymentRecord/getRepaidBasePage`,
    method: "get",
    params: data,
  });
};
//一次性采购合同详情
export const getOnceCgInfo = (data: any) => {
  return axios({
    url: `/financial-center-business/procurementContractLedgerOne/getDetailById`,
    method: "get",
    params: data,
  });
};
//框架采购合同
export const getFarmeCgInfo = (data: any) => {
  return axios({
    url: `/financial-center-business/procurementContractLedgerFramework/getDetailById`,
    method: "get",
    params: data,
  });
};

//销售合同一次性详情
export const getOnceXsInfo = (data: any) => {
  return axios({
    url: `/financial-center-business/salesContractLedgerOne/getDetailById`,
    method: "get",
    params: data,
  });
};
//销售合同 框架
export const getFarmeXsInfo = (data: any) => {
  return axios({
    url: `/financial-center-business/salesContractLedgerFramework/getDetailById`,
    method: "get",
    params: data,
  });
};
