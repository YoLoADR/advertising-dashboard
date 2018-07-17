<template>
	<v-container fluid grid-list-xl pa-0>
		<div class="app-card inbox">
			<v-navigation-drawer
				temporary
				absolute
				v-model="inboxSidebar"
				:width="225"
			>
				<sidebar></sidebar>
			</v-navigation-drawer>
			<v-layout row wrap>
				<v-flex xs12 sm4 md3 lg3 xl2 class="pr-0 inbox-sidebar">
					<sidebar></sidebar>
				</v-flex>
				<v-flex xs12 sm12 md9 lg9 xl10 class="pl-0 inbox-content">
					<div class="inbox-content-wrap">
						<template v-if="selectedEmail === null">
							<div>
								<div class="inbox-page-list d-custom-flex justify-space-between align-items-center">
									<div class="d-custom-flex align-items-center">
										<div class="ham-menu-sm d-none">
											<v-btn flat icon class="mr-3 my-0" @click="toggleInboxSidebar">
												<v-icon class="grey--text">menu</v-icon>
											</v-btn>
										</div>
										<span class="mail-count">1-10 from 23</span>
									</div>
									<ul class="list-inline">
										<li>
											<v-tooltip v-model="reload" top>
												<a href="javascript:void(0);" slot="activator">
													<i class="ti-reload"></i>
												</a>
												<span>Reload</span>
											</v-tooltip>
										</li>
										<li>
											<v-tooltip v-model="previous" top>
												<a href="javascript:void(0);" slot="activator">
													<i class="ti-arrow-left"></i>
												</a>
												<span>Previous</span>
											</v-tooltip>
										</li>
										<li>
											<v-tooltip v-model="next" top>
												<a href="javascript:void(0);" slot="activator">
													<i class="ti-arrow-right"></i>
												</a>
												<span>Next</span>
											</v-tooltip>
										</li>
									</ul>
								</div>
								<search-emails></search-emails>
								<email-listing></email-listing>
							</div>
						</template>
						<template>
							<email-detail></email-detail>
						</template>
					</div>
				</v-flex>
			</v-layout>
		</div>
	</v-container>
</template>

<script>
import EmailListing from "./EmailListing";
import Sidebar from "./Sidebar";
import EmailDetail from "./EmailDetail";
import SearchEmails from "./SearchEmails";
import $ from "jquery";
import { mapGetters } from "vuex";
import { getCurrentAppLayout } from "Helpers/helpers";

export default {
  mounted() {
    $(".v-content__wrap").css({ overflow: "hidden" });
    $(".app-boxed-layout .app-content").css({ overflow: "hidden" });
  },
  destroyed() {
    if (getCurrentAppLayout(this.$router) === "boxed") {
      $(".v-content__wrap").css({ overflow: "" });
    } else {
      $(".v-content__wrap").css({ overflow: "auto" });
    }
    $(".app-boxed-layout .app-content").css({ overflow: "auto" });
  },
  components: {
    EmailListing,
    Sidebar,
    EmailDetail,
    SearchEmails
  },
  computed: {
    ...mapGetters(["selectedEmail"])
  },
  data() {
    return {
      reload: false,
      previous: false,
      next: false,
      inboxSidebar: false
    };
  },
  methods: {
    toggleInboxSidebar() {
      this.inboxSidebar = !this.inboxSidebar;
    }
  }
};
</script>
