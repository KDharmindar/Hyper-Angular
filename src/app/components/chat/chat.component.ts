import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";
import { WeavyService } from "../../services/weavy.service";

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [],
  templateUrl: "./chat.component.html",
  styleUrl: "./chat.component.css",
  providers: [WeavyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatComponent {
  @Input() uid!: string;

  constructor(private weavyService: WeavyService) {
    this.weavyService = weavyService;
  }
}
