<template>
	<div>
   	<v-container fluid grid-list-xl>
			<v-layout row wrap>
				<v-flex xl6 lg6 md6 sm7 xs12>
					<div class="welcome-message mb-3">
						<h4>Good morning, Fanny, Julio et Kevin.</h4>
						<p>Here’s what’s happening with your campaign this week.</p>
					</div>
					<div class="welcome-chart">
						<v-layout row wrap>
							<v-flex xl6 lg6 md6 sm6 xs12>
								<h2 class="mb-0 grey--text">$21,349.29</h2>
								<span class="d-block fs-12 mb-3 grey--text">Spend Today</span>
								<bar-chart 
									:height="110"
									:dataSets="earnedToday"
								>
								</bar-chart>
							</v-flex>
							<v-flex xl6 lg6 md6 sm6 xs12>
								<h2 class="mb-0 grey--text">15,800</h2>
								<span class="d-block fs-12 mb-3 grey--text">Impression Today</span>
								<bar-chart 
									:height="110"
									:dataSets="itemsSold"
								>
								</bar-chart>
							</v-flex>
						</v-layout>
					</div>
				</v-flex>
				<v-flex xl6 lg6 md6 xs12 sm5 class="d-sm-none">
					<div class="d-custom-flex align-items-center justify-center">
						<img class="img-responsive" src="/static/img/agency-welcome.png" height="300" width="550" alt="agency block">
					</div>
				</v-flex>
			</v-layout>
			
			<v-layout row wrap>
				<app-card
					colClasses="x12 lg12 md12 xs12 sm12"
					:heading="$t('message.adCampaignPerfomance')"
					:closeable="true"
					:fullScreen="true"
					:reloadable="true"
					contentCustomClass="pos-relative"
				>
					<ad-campaign-perfomance-example 
						:height="350" 
						:data="adCampaignPerfomanceExampleData"
					></ad-campaign-perfomance-example>		
				</app-card>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import BarChart from "Components/Charts/BarChart";
import AdCampaignPerfomance from "Components/Charts/AdCampaignPerfomance";
import AdCampaignPerfomanceExample from "Components/Charts/AdCampaignPerfomanceExample";

// widgets
import ActiveUser from "Components/Widgets/ActiveUser";

// data
import {
  earnedToday,
  itemsSold,
  salesAndEarning,
  totalEarnings,
  netProfit,
  onlineRevenue,
  totalExpences,
  adCampaignPerfomanceData,
  adCampaignPerfomanceExampleData
} from "./../dashboard/data";
import myJson from './../dashboard/data.json'
import { activeUser } from "Views/widgets/data";
export default {
  components: {
    BarChart,
    AdCampaignPerfomance,
    AdCampaignPerfomanceExample,
    ActiveUser
  },
  data() {
    
    return {
      earnedToday,
      itemsSold,
      salesAndEarning,
      totalEarnings,
      netProfit,
      onlineRevenue,
      totalExpences,
      adCampaignPerfomanceData,
      adCampaignPerfomanceExampleData,
      activeUser,
      myJson
    };
  }
};
</script>

