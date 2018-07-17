<template>
   <app-card
      :heading="$t('message.activity')"
      :closeable="true"
      :reloadable="true"
      :fullScreen="true"
      colClasses="activity-widget-wrap pa-0"
   >
      <div class="activity-widget">
         <vue-perfect-scrollbar style="height:433px" class="activity-scroll">
            <ul class="list-unstyled px-3">
               <li v-for="activity in activities" :key="activity.id">
                  <v-badge :class="activity.badgeClass" class="primary floating rounded"></v-badge>
                  <span class="activity-time">{{activity.date}}</span>
                  <p>{{activity.name}}</p>
               </li>
            </ul>
         </vue-perfect-scrollbar>
      </div>
   </app-card>
</template>

<script>
export default {
   data() {
      return {
         activities: [
            {
               id: 1,
               date: 'Just Now',
               name: 'Activity task #features 4',
               badgeClass: 'primary'
            },
            {
               id: 2,
               date: '3 days ago',
               name: 'John Doe Lorem Ipsum is simply dummy text oftting industry. ',
               badgeClass: 'info'
            },
            {
               id: 3,
               date: '4 days ago',
               name: 'Call to customer Jacob and discuss the detail.',
               badgeClass: 'warning'
            },
            {
               id: 4,
               date: '5 Feb, 11:30PM',
               name: '@Jessi retweet your post',
               badgeClass: 'success'
            },
            {
               id: 5,
               date: '2 Feb 2018, 5:15AM',
               name: '@John Doe retweet your post',
               badgeClass: 'error'
            },
            {
               id: 6,
               date: '1 Feb 2018, 4:15PM',
               name: 'Lorem Ipsum is simply dummy text oftting industry: John Doe. ',
               badgeClass: 'info'
            },
            {
               id: 7,
               date: '4 days ago',
               name: 'Call to customer Jacob and discuss the detail.',
               badgeClass: 'warning'
            },
         ]
      }
   }
}
</script>

