import * as cdk from 'aws-cdk-lib';
import * as beep_service from '../lib/beep';

export class ComMkoelleLendersLibraryApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new beep_service.Service(this, 'Beep')
  }
}
