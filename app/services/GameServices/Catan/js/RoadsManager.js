var Roads = {};

function InitializeRoads()
{
    Roads = {};
    Roads.edge_Al_Ar = { "IsBuiltBy": "empty" };
    Roads.edge_Al_AB = { "IsBuiltBy": "empty" };
    Roads.edge_Ar_AC = { "IsBuiltBy": "empty" };
    Roads.edge_B_AB = { "IsBuiltBy": "empty" };
    Roads.edge_AC_C = { "IsBuiltBy": "empty" };
    Roads.edge_B_BD = { "IsBuiltBy": "empty" };
    Roads.edge_AB_ABE = { "IsBuiltBy": "empty" };
    Roads.edge_AC_ACE = { "IsBuiltBy": "empty" };
    Roads.edge_C_CF = { "IsBuiltBy": "empty" };
    Roads.edge_Dr_BD = { "IsBuiltBy": "empty" };
    Roads.edge_ABE_ACE = { "IsBuiltBy": "empty" };
    Roads.edge_CF_Fl = { "IsBuiltBy": "empty" };
    Roads.edge_Dr_Dl = { "IsBuiltBy": "empty" };
    Roads.edge_BD_BDG = { "IsBuiltBy": "empty" };
    Roads.edge_ABE_BEG = { "IsBuiltBy": "empty" };
    Roads.edge_ACE_CEH = { "IsBuiltBy": "empty" };
    Roads.edge_CF_CFH = { "IsBuiltBy": "empty" };
    Roads.edge_Fl_Fr = { "IsBuiltBy": "empty" };
    Roads.edge_BDG_BEG = { "IsBuiltBy": "empty" };
    Roads.edge_CEH_CFH = { "IsBuiltBy": "empty" };
    Roads.edge_Dl_DI = { "IsBuiltBy": "empty" };
    Roads.edge_BDG_DGI = { "IsBuiltBy": "empty" };
    Roads.edge_BEG_EGJ = { "IsBuiltBy": "empty" };
    Roads.edge_CEH_EHJ = { "IsBuiltBy": "empty" };
    Roads.edge_CFH_FHK = { "IsBuiltBy": "empty" };
    Roads.edge_Fr_FK = { "IsBuiltBy": "empty" };
    Roads.edge_DI_DGI = { "IsBuiltBy": "empty" };
    Roads.edge_EGJ_EHJ = { "IsBuiltBy": "empty" };
    Roads.edge_FHK_FK = { "IsBuiltBy": "empty" };
    Roads.edge_DI_I = { "IsBuiltBy": "empty" };
    Roads.edge_DGI_GIL = { "IsBuiltBy": "empty" };
    Roads.edge_EGJ_GJL = { "IsBuiltBy": "empty" };
    Roads.edge_EHJ_HJM = { "IsBuiltBy": "empty" };
    Roads.edge_FHK_HKM = { "IsBuiltBy": "empty" };
    Roads.edge_FK_K = { "IsBuiltBy": "empty" };
    Roads.edge_GIL_GJL = { "IsBuiltBy": "empty" };
    Roads.edge_HJM_HKM = { "IsBuiltBy": "empty" };
    Roads.edge_I_IN = { "IsBuiltBy": "empty" };
    Roads.edge_GIL_ILN = { "IsBuiltBy": "empty" };
    Roads.edge_GJL_JLO = { "IsBuiltBy": "empty" };
    Roads.edge_HJM_JMO = { "IsBuiltBy": "empty" };
    Roads.edge_HKM_KMP = { "IsBuiltBy": "empty" };
    Roads.edge_K_KP = { "IsBuiltBy": "empty" };
    Roads.edge_IN_ILN = { "IsBuiltBy": "empty" };
    Roads.edge_JLO_JMO = { "IsBuiltBy": "empty" };
    Roads.edge_KMP_KP = { "IsBuiltBy": "empty" };
    Roads.edge_IN_Nl = { "IsBuiltBy": "empty" };
    Roads.edge_ILN_LNQ = { "IsBuiltBy": "empty" };
    Roads.edge_JLO_LOQ = { "IsBuiltBy": "empty" };
    Roads.edge_JMO_MOR = { "IsBuiltBy": "empty" };
    Roads.edge_KMP_MPR = { "IsBuiltBy": "empty" };
    Roads.edge_KP_Pr = { "IsBuiltBy": "empty" };
    Roads.edge_LNQ_LOQ = { "IsBuiltBy": "empty" };
    Roads.edge_MOR_MPR = { "IsBuiltBy": "empty" };
    Roads.edge_Nl_Nr = { "IsBuiltBy": "empty" };
    Roads.edge_LNQ_NQ = { "IsBuiltBy": "empty" };
    Roads.edge_LOQ_OQS = { "IsBuiltBy": "empty" };
    Roads.edge_MOR_ORS = { "IsBuiltBy": "empty" };
    Roads.edge_MPR_PR = { "IsBuiltBy": "empty" };
    Roads.edge_Pr_Pl = { "IsBuiltBy": "empty" };
    Roads.edge_Nr_NQ = { "IsBuiltBy": "empty" };
    Roads.edge_OQS_ORS = { "IsBuiltBy": "empty" };
    Roads.edge_PR_Pl = { "IsBuiltBy": "empty" };
    Roads.edge_NQ_Q = { "IsBuiltBy": "empty" };
    Roads.edge_OQS_QS = { "IsBuiltBy": "empty" };
    Roads.edge_ORS_RS = { "IsBuiltBy": "empty" };
    Roads.edge_PR_R = { "IsBuiltBy": "empty" };
    Roads.edge_Q_QS = { "IsBuiltBy": "empty" };
    Roads.edge_RS_R = { "IsBuiltBy": "empty" };
    Roads.edge_QS_Sl = { "IsBuiltBy": "empty" };
    Roads.edge_RS_Sr = { "IsBuiltBy": "empty" };
    Roads.edge_Sl_Sr = { "IsBuiltBy": "empty" };
}

module.exports = {
    Init: function()
    {
        InitializeRoads();
    },
    GetRoads: function()
    {
        return Roads;
    }
}