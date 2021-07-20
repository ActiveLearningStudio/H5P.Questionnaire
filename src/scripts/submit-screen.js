import './styles/submit-screen.css';

import Utils from './utils';

export default class SubmitScreen extends H5P.EventDispatcher {
  constructor({title, subtitle, backLabel, submitLabel, summaryHtml}) {
    super();

    this.wrapper = Utils.createDiv({
      className: 'h5p-questionnaire-submit-screen hide'
    });
    this.wrapper.setAttribute('tabindex', '-1');

    // Create title
    this.wrapper.appendChild(Utils.createDiv({
      className: 'h5p-questionnaire-submit-screen-title',
      innerHTML: title
    }));

    // Create subtitle
    this.wrapper.appendChild(Utils.createDiv({
      className: 'h5p-questionnaire-submit-screen-subtitle',
      innerHTML: subtitle
    }));

    // Create subtitle
    this.wrapper.appendChild(Utils.createDiv({
      className: 'h5p-questionnaire-submit-screen-summary',
      innerHTML: ''
    }));

    // Add buttons
    this.wrapper.appendChild(Utils.createButton(backLabel, 'previous', this));
    this.wrapper.appendChild(Utils.createButton(submitLabel, 'submit', this));
    //this.wrapper.appendChild(Utils.createButton('View Summary', 'view_summary', this));

    /**
     * Show submit screen
     */
    this.show = function () {
      this.wrapper.classList.remove('hide');
      this.wrapper.focus();
    };

    

    /**
     * Hide submit screen
     */
    this.hide = function () {
      this.wrapper.classList.add('hide');
    };
  }

  /**
     * Show submit screen
     */

  showSummary() {
   
    console.log(this);
    var table_content = '<tbody>';
    /*for (var m =0; m < self.clozes.length; m++){
      
      var strwa = self.questions_arr[m].replace('<br>','');
      var strwa = strwa.replace('<p>','');
      var strwa = strwa.replace('.','');
      var answer_status = (self.clozes[m].correct()) ? "Correct" : "Incorrect";
      table_content += '<tr>';
      table_content += '<td>'+strwa+'</td>';
      table_content += '<td>'+self.clozes[m].getUserAnswer()+'</td>';
      table_content += '<td>'+answer_status+'</td>';
      table_content += '</tr>';
      
    }*/

    var summary_html = '<div class="custom-summary-section"><div class="h5p-summary-table-pages"><table class="h5p-score-table-custom" style="min-height:100px;width:100%"><thead><tr><th>Question</th><th>Answer</th><th>Result</th></tr></thead>'+table_content+'</table></div></div>';
    return summary_html;
  }
  /**
   * Attach to parent
   *
   * @param {HTMLElement} container
   */
  attachTo(container) {
    container.appendChild(this.wrapper);
  }
}
