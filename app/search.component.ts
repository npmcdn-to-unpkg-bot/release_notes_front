/**
 * Created by ititov on 27/08/2016.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'search',
    template: '<div class="row"><div class="col-lg-8 col-lg-offset-4 col-md-7 col-sm-12"><form>' +
    '<div class="form-group"><div class="form-group"><label for="exampleInputEmail1">Release branch or tag</label>'
    + '<input type="email" class="form-control" id="exampleInputEmail1" placeholder="release-v16.99">'
    + '</div> </div> <button type="submit" class="btn btn-primary">Get release notes</button>'
    + '<hr /></form></div></div>'
})

export class SearchComponent
{
}